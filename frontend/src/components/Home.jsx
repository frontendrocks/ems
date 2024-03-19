import './common.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
function Home() {

  return (
    <div className="w-full">
      <Header />
      <div className='flex justify-center items-center mt-5'>
          <div className="w-full mx-36  row-auto   card mt-10 rounded-md  text-center border-solid border-2 border-indigo-600">
        <h1 className="font-bold  text-blue-700 text-2xl text-center">Welcome to EMS</h1>
        <p className="text-justify mt-4 pb-2 h-80">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          <br/> <br/>  It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
            only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
            only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          <br/> <br/> 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
            only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
        
            software like Aldus PageMaker including versions of Lorem Ipsum.
            and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
            only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
        
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      </div>
      <Footer />
    </div>
    )
  
}

export default Home
