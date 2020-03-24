import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

//rfce
function UploadProductPage(props) {
  // title & deskripsi string, harga int
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [Images, setImages] = useState([]);
  const onTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  };
  const onDescriptionChange = event => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onPriceChange = event => {
    setPriceValue(event.currentTarget.value);
  };
  const updateImages = newImages => {
    console.log(newImages);
    setImages(newImages);
  };
  const onSubmit = event => {
    event.preventDefault();

    // Create Alert if the field still empty
    if (!TitleValue || !DescriptionValue || !PriceValue || !Images) {
      return alert('Harap Isi Semua Kolom!');
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images
    };
    Axios.post('/api/product/uploadProduct', variables).then(response => {
      if (response.data.success) {
        alert('Product Successfully Uploaded');
        props.history.push('/');
      } else {
        alert('Failed to upload Product');
      }
    });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}> Upload Barang/Jasa/Lainnya</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/*Dropzone*/}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>Nama Barang/Jasa/Lainnya</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Deskripsi</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Harga</label>
        <Input onChange={onPriceChange} value={PriceValue} type="number" />
        <br />
        <br />

        <Button onClick={onSubmit}> Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
