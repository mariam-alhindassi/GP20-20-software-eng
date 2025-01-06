import Nav from 'react-bootstrap/Nav';



export default function Navbar (){
    return (

        <>


            <div >
             <Nav defaultActiveKey="/home" as="ul" class="navbar navbar-light">
                    <Nav.Item as="li">
                <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                 <Nav.Item as="li">
                      <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                 <Nav.Item as="li">
                      <Nav.Link eventKey="link-2">Link</Nav.Link>
                 </Nav.Item>
        </Nav>
            </div>
            </>
    
    );
}