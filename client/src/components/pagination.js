import React from "react"
import Button from "react-bootstrap/Button"

export function Pagination({dataPerPage, totalData, currentPage, setPage}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
    {currentPage !== 1 ? 
      <Button onClick={() => setPage(currentPage - 1)} >Previous page</Button>
    :
      <></>
    }
      {currentPage} / {pageNumbers.length}
    {currentPage !== pageNumbers.length ?
      <Button onClick={() => setPage(currentPage + 1)} >Next page</Button>
    :
      <></>
    }
    </div>
  )
}

export default Pagination