import { Provider } from 'react-redux'
import { store } from '../store'
import CartContextProvider from '../contexts/cartContext'
import AuthContextProvider from '../contexts/authContext'

const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store} >
        <AuthContextProvider value={{ authState, login }}>
          <CartContextProvider>
              { children }
          </CartContextProvider>
        </AuthContextProvider>
      </Provider>
    </>
  )
}
export default Providers