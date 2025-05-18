import React, { useState, useRef } from 'react';
import './ImageUploader.scss';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

const ImageUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [objectInfo, setObjectInfo] = useState<[]>([]);
  const [resultsFolder, setResultsFolder] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Будь ласка, виберіть файл.');
      return;
    }

    setProcessing(true);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(
        `${API_BASE}/process_image`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setObjectInfo(response.data.object_info);
      setResultsFolder(response.data.results_folder);

      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Помилка при завантаженні файлу:', error);
      alert('Сталася помилка при обробці зображення.');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownloadResult = (filename: string) => {
    const url = `${API_BASE}/results/${resultsFolder}/${filename}`;
    window.open(url, '_blank');
  };

  return (
    <div className='imageUploader'>
      <h1 className='imageUploader__title'>
        Завантаження зображення для аналізу
      </h1>

      <input
        ref={fileInputRef}
        className='imageUploader__input'
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />

      <button
        className='imageUploader__button'
        onClick={handleUpload}
        disabled={processing}
      >
        {processing ? 'Обробка...' : 'Відправити'}
      </button>

      {objectInfo.length > 0 && (
        <div>
          <h2>Інформація про виявлені об'єкти</h2>
          <h3>Завантажити результати:</h3>
          <ul className='imageUploader__list'>
            <li>
              <button onClick={() => handleDownloadResult('yolo.jpg')}>
                results.jpg
              </button>
            </li>
            <li>
              <button onClick={() => handleDownloadResult('object_info.json')}>
                object_info.json
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
