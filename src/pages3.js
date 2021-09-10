import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import { CgArrowLeftO } from "react-icons/cg";
import { Card } from 'react-bootstrap';

import data from './data/dataes3s.json'

let PageSize = 9;

export default function Pages2() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  console.log(currentTableData)
  return (
    <>
          <div className="container p-3 mx-auto">
              <a href="/ertu" className="position-relative align-self-center">
                          <CgArrowLeftO size="2em" color='red' /> <p>Go Back</p></a>
              <h2 className="bg-danger text-light text-center">Season 3 Ertugul Ghazi</h2>
          <div className="row mt-4">

        {/* loop over the books */}
        {currentTableData.map((inf) => (
        <Card key={inf.id} className="col-md-4 video-responsive item">
          
            <Card.Title>
            <h4 className="text-center mt-3">Episode.No {inf.id}</h4>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center ">
          <iframe
            width="300"
            height="200"
            src={inf.link}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Osman series"
          />
         
          </Card.Body> 
        </Card>
         
        ))}
      </div>
      </div>

          <Pagination
            className="pagination-bar row"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
    </>
  );
}