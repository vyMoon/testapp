import React from 'react';

const HOCLister = (ListingComponent, containerClassName = '') => {
  return class Component extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: props.list
      }

      this.containerClassName = containerClassName;
      this.defaultContainerClassName = 'container'
    }

    render() {
      const ClassNameContainer =  this.containerClassName 
        ? `${this.defaultContainerClassName} ${containerClassName}` 
        : this.defaultContainerClassName;
      return (
        <div className='list'>
          <div className={ClassNameContainer}>
            {this.state.list.map((el, index) => {
              return (
                <ListingComponent 
                  key={index}
                  {...el}
                />
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default HOCLister;
