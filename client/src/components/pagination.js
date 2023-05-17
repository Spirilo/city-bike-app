import React from "react"

export function Pagination({journeysPerPage, totalJourneys, currentPage, setPage}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalJourneys / journeysPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
    {currentPage !== 1 ? 
      <button onClick={() => setPage(currentPage - 1)} >Edellinen sivu</button>
    :
      <></>
    }
      {currentPage} / {pageNumbers.length}
    {currentPage !== pageNumbers.length ?
      <button onClick={() => setPage(currentPage + 1)} >Seuraava sivu</button>
    :
      <></>
    }
    </div>
  )
}

export default Pagination