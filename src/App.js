import QRCode from "qrcode";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState("");

  const GenerateQRcode = () => {

    if (!url.trim()) {
      toast('Vui lòng nhập text');
      return;
    }

    if (url.includes(' ')) {
      toast('không được có khoảng trắng');
      return;
    }

    QRCode.toDataURL(url,{
      with: 1200,
      margin: 2,
      color:{
        dark:'#000000ff',
        light:'#ffffffff'
      }
    }, (err, url) => {
      if (err) return toast(err.message);
    //  url === undefined && console.log('djtmemay');
      
      console.log(url);
      setQrcode(url);
    });
  };

  return (
    <div className="app">
      <h1>Tạo mã QR</h1>
      <p>Web này Tỏn làm chơi chơi</p>
      <input
        type="text"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
        placeholder="Nhập chữ dô đây"
      />
      
      <button onClick={GenerateQRcode}>Tạo mã</button>
      {/* eslint-disable-next-line */}
      {qrcode ? <>
        <img src={qrcode} />
        <a href={qrcode} download='qrcode.png' >Tải dìa</a>
      </> : <>
      </>}
      <ToastContainer />
    </div>
  );
}

export default App;
