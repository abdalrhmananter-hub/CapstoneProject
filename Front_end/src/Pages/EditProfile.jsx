import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Sign() {
  return (
    <>
      <div style={{ marginLeft: "50%" }} className='mx-5'>
        <h2 className='flex-fill mt-5'>Edit Profile</h2>
        <h4>Manage your public identity and reading preferences.</h4>
      </div>
      <div className='d-flex'>


        <Card style={{ width: '18rem' }} className='d-flex flex-grow-1 mx-5'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Change Avatar</Button>
          </Card.Body>
        </Card>


      </div>

    </>
  )
}
