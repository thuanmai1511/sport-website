import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';



const Example = (props) => {
    const page = props.page;

    return (
    <Pagination aria-label="Page navigation example" style={{justifyContent:"center", marginTop:"30px"}}>
    <PaginationItem>
        <PaginationLink first href="/Products/page=1" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/Products/page=1">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/Products/page=2">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/Products/page=3">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/Products/page=4">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/Products/page=5">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="/Products/page=5" />
      </PaginationItem>
      
    </Pagination>
    
  );
}

export default Example;