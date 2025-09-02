import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Component.module.css';

const Component = ({ 
  initialCount = 0, 
  onCountChange 
}) => {
  const [count, setCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (onCountChange) {
      onCountChange(count);
    }
  }, [count, onCountChange]);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  if (isLoading) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <h2>Contador: {count}</h2>
      <button 
        onClick={increment}
        className={styles.button}
      >
        +
      </button>
      <button 
        onClick={decrement}
        className={styles.button}
      >
        -
      </button>
    </div>
  );
};

Component.propTypes = {
  initialCount: PropTypes.number,
  onCountChange: PropTypes.func
};

export default Component;
