import { Route, Routes } from 'react-router-dom'

import { Home, Series, Movies } from '../containers'
import DefaultLayout from '../layouts/DefaultLayout'

function MyRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  )
}

export default MyRoutes
