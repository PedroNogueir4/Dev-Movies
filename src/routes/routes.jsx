import { Route, Routes } from 'react-router-dom'

import { Home, Series, Movies } from '../containers'

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  )
}

export default MyRoutes
