const PartyDetails = () => {
    return (
        <div style={{
            textAlign: "center",
            marginBottom: "40px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#333", // Slightly darker background for contrast
            color: "white",
            maxWidth: "800px", // Keeps it aligned with menu width
            margin: "auto",
            marginTop: "60px"
        }}>
            <h2 style={{
                fontFamily: "'Playfair Display', serif",
                marginBottom: "10px"
            }}>
                Dinner Party Details
            </h2>
            <p style={{
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "10px",
                fontSize: "1rem"
            }}>
                Join us for a delicious evening of food and fun!
            </p>
            <p style={{
                fontFamily: "'Roboto', sans-serif'",
                marginBottom: "5px",
                fontSize: "1rem"
            }}>
                <strong>Date & Time:</strong> Friday, January 10th, 2025, at 6:00 PM
            </p>
            <p style={{
                fontFamily: "'Roboto', sans-serif'",
                marginBottom: "10px",
                fontSize: "1rem"
            }}>
                <strong>Location:</strong> 920 N Wells St, Chicago, IL 60610
            </p>
            <a
                href="https://www.google.com/maps/dir//920+N+Wells+St,+Chicago,+IL+60610/@41.8996201,-87.717045,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fd31730af863b:0xbac1c1b897317606!2m2!1d-87.6346442!2d41.8996496?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "#ffcc00", // Bright link color for visibility
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline"; // Add underline on hover
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none"; // Remove underline on mouse leave
                }}
            >
                Get Directions
            </a>
        </div>
    );
};

export default PartyDetails;
