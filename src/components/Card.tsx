import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const Wrapper = styled.section`
  border-radius: var(--brad);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-regular);
`;

interface IProps {
    img: string
    name: string
    info: { title: string, description: string }[]
}

export const Card: React.FC<IProps> = props => {

    const {img, name, info} = props;
    const navigate = useNavigate();

    const cardClickHandler = () => {
        navigate(`/country/${name}`);
    }

    return (
        <Wrapper onClick={cardClickHandler}>
            <CardImg src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(i => {
                        return <CardListItem key={i.title}>
                            <b>{i.title}: </b>{i.description}
                        </CardListItem>
                    })}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};