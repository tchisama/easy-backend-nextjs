type Props = {
    children: (data:any)=> React.ReactNode
    from: string
}

function Get({children,from}: Props) {
  return children(from)
}

export default Get