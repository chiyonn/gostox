import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AsinSearch.module.css';

const AsinSearch = () => {
  const [asin, setAsin] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = asin.trim();
    if (trimmed && trimmed.startsWith('B0')) {
      navigate(`/catalog/${trimmed}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <input
        name="asin search"
        placeholder="ASINから探す"
        value={asin}
        onChange={(e) => setAsin(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>検索</button>
    </div>
  );
};

export default AsinSearch;
