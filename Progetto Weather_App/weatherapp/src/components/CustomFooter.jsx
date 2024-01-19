import Container from 'react-bootstrap/Container';

const CustomFooter = () => {
    return (
        <footer className='fixed-bottom py-3'>
            <Container>
                <p className='text-center text-light m-0'>&copy; Gerta Koni {new Date().getFullYear()}</p>
            </Container>
        </footer>
    )
}

export default CustomFooter;