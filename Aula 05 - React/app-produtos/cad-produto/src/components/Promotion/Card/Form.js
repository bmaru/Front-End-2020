import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Row, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValue = {
    title: "",
    url: "",
    imageUrl: "",
    price: 0,
}

const PromotionForm = ( {id} ) => {

    const [values, setValues] = useState( id ? null : initialValue);
    const history = useHistory();

        useEffect(() => {
            if (id) {
                axios.get(`http://localhost:5000/promotions/${id}`)
                .then((response) => {
                    setValues(response.data)
                })
            }
        }, [id]);


        function onChange(ev) {
            const { name, value } = ev.target;
            setValues({...values, [name]: value})
        }

        function onSubmit(ev) {
            ev.preventDefault();

            const method = id ? 'put' : 'post';
            const url = id ? `http://localhost:5000/promotions/${id}`
            : `http://localhost:5000/promotions`

            axios[method](url, values)
            .then((response) => {
                history.push('/');
            });
        }

    return (
        <div>
            {!values ? (<div>Conteúdo sendo carregado...</div>) :
            (
            <Container className="row mx-auto justify-content-center">
            <Row className="col-md-auto">
                <Form onSubmit={onSubmit}>
                    <Card>
                        <Card.Header as="h5">Formulário Genérico</Card.Header>
                        <Card.Body>
                            <Card.Title>Formulário de Promoção</Card.Title>
                            
                            <Form.Group>
                                <Form.Label htmlFor="title">Título</Form.Label>
                                <Form.Control type="text" name="title" id="title" value={values.title} onChange={onChange}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="price">Preço</Form.Label>
                                <Form.Control type="text" name="price" id="price" value={values.price} onChange={onChange}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="imageUrl">Imagem</Form.Label>
                                <Form.Control type="text" name="imageUrl" id="imageUrl" value={values.imageUrl} onChange={onChange}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="url">URL</Form.Label>
                                <Form.Control type="text" name="url" id="url" value={values.url} onChange={onChange}></Form.Control>
                            </Form.Group>
                                                                                                                                                                                                                                                                         
                            <Button variant="secondary" type="submit">Enviar</Button>
                        </Card.Body>
                    </Card>
                </Form>
            </Row>

            </Container>
            )}
        </div>
    )
};

export default PromotionForm;