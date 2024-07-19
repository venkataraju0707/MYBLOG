import React from 'react';
// import BlogContainer from './components/BlogContainer';
import Card from './components/Card';
// import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header/>
      <Card username="VENKATARAJU" />
      {/* <BlogContainer /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
