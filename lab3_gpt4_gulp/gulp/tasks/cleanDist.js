import del from 'del'


const cleanDist = () => {
  return del(app.paths.clean)
}


export default cleanDist
