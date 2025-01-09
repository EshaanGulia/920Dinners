import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <>
      <div style={{ 
        position: "relative", 
        textAlign: "center", 
        overflow: "hidden", 
        height: "60vh" // Adjust the height for a more cinematic effect
      }}>
        {/* Main Image */}
        <img 
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRuMdypqdU43nrQvvFJ_0D48joe2aBQ4gX6546cTm0u60oA4Qz_JhPnXufPaepq3QQH06WEAaPkLW7ru9Sih3o_VgrsafUFDpK87Qn2rw" 
          alt="Welcome to Italy" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            filter: "brightness(70%)", // Further darken for better text contrast
          }} 
        />
        
        {/* Overlay Text */}
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          color: "white", 
          fontSize: "4em", 
          fontWeight: "bold", 
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)", 
          fontFamily: "'Playfair Display', serif", // Adds a classic, elegant font
          letterSpacing: "2px"
        }}>
          Welcome to Italy
        </div>

        {/* Decorative Divider */}
        <div style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "2px",
          opacity: 0.8
        }} />
      </div>
      
      <div style={{ 
        textAlign: "center", 
        alignContent: "center", 
        padding: "20px", 
        backgroundColor: "#222", // Adds a sleek dark background for the menu section
        color: "white" 
      }}>
        <MenuComponent />
      </div>
    </>
  );
}

export default App;
