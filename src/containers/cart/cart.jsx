import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography varient='subtitle'>У вас нет товаров в корзине!
            <Link to='/' className={classes.link}> Пора бы уже выбрать что-то и купить!</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Итого к оплате: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Очистить корзину</Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Оформить заказ</Button>
                </div>
            </div>
        </>
    )

    // if (!cart.line_items) return 'Загрузка ...'

    return (
        <Container>
            <div className={classes.toolber} />
            <Typography className={classes.title} variant='h3' gutterBottom>Ваша корзина</Typography>
            {/* {!cart.line_items.length ? <EmptyCart /> : <FilledCart />} */}

        </Container>
    )
}
export default Cart;