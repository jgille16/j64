import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer" aria-label="Site Footer">
            <p aria-label="Creator Information">Created by Jessy Gillespie</p>
            <p aria-label="Email Contact">
                Email:  
                <a 
                    href="mailto:jgille16@charlotte.edu" 
                    className="footer-link" 
                    aria-label="Send an email to Jessy"
                >
                  jgille16@charlotte.edu
                </a>
            </p>
        </footer>
    );
};

export default Footer;