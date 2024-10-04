import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css"
//import "@/app/style.css"

export const metadata={
    title:"Web con next",
    description:"Front end con next"
}
export default function RootLayout({children}){
    return(
        <html>
            <body>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}