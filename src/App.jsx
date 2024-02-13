import { useState, useEffect } from 'react'
import { creditRequests } from './data'

export function App() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    setRequests(creditRequests)
  }, [])

  const handleClick = () => {
    requests.length ? setRequests([]) : setRequests(creditRequests)
  }
  
  return (
    <>
      <button onClick={handleClick}>Cambiar cantidad de creditos</button>
      <h1>Creditos solicitados</h1>
      <table>
        <thead>
          <tr>
            <th>número de créditos</th>
            <th>nombre</th>
            <th>cantidad solicitada</th>
            <th>aprobado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>5000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Marta Gómez</td>
            <td>12000</td>
            <td>No</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Carlos Ruiz</td>
            <td>8000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ana Torres</td>
            <td>15000</td>
            <td>No</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Luis Molina</td>
            <td>7000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sandra Navarro</td>
            <td>9500</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Roberto Sánchez</td>
            <td>4000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Diana López</td>
            <td>11000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pedro Jiménez</td>
            <td>6000</td>
            <td>No</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Jessica Morales</td>
            <td>13500</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Miguel Ángel Fernández</td>
            <td>8500</td>
            <td>No</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Carmen Rodríguez</td>
            <td>3000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Francisco García</td>
            <td>10500</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Laura Martínez</td>
            <td>9500</td>
            <td>No</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sergio Hernández</td>
            <td>7200</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Andrea González</td>
            <td>11500</td>
            <td>No</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Raúl Álvarez</td>
            <td>5000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Patricia Vargas</td>
            <td>6500</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Oscar Medina</td>
            <td>7800</td>
            <td>No</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Verónica Castillo</td>
            <td>5600</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Diego Romero</td>
            <td>9000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sofía Peralta</td>
            <td>4000</td>
            <td>No</td>
          </tr>
          <tr>
            <td>0</td>
            <td>Jorge Salazar</td>
            <td>11000</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Elena Núñez</td>
            <td>8500</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gabriel Ortega</td>
            <td>10000</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
