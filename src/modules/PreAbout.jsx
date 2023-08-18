import React from 'react'

export default function PreAbout() {
  const predictionStyles = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#333',
    marginTop: '20px',
    padding: '2%'
  };

  return (
    <div>
      <h1 style={{textAlign: 'center',
        padding: '20px'
      }}>About our Product</h1>
      <div style={predictionStyles}>
            <p>
              As a Product Manager with a passion for technology and data-driven solutions, I have experience in utilizing machine learning for predictive analytics. My work involves utilizing two distinct machine learning models: Linear Regression and Random Forest.
            </p>
            <p>
              These models are trained on data collected from various sources, including popular online marketplaces like OLX and PakWheels. By analyzing attributes from car advertisements such as brand, year, fuel type, and more, I've created models that predict car prices with accuracy.
            </p>
            <p>
              Leveraging my skills in MERN stack development and data science, I'm able to not only build robust web applications but also harness the power of data to create valuable insights and predictions that can benefit both buyers and sellers in the automotive market.
            </p>
          </div>
    </div>
  )
}
