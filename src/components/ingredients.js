import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {CenterDiv} from "../layout/elements/other";
import {OverflowTable, Table, Tbody, Td, Th, Thead} from "../layout/elements/table";
import {DeleteButton} from "../layout/elements/buttons";

const Wrapper = styled(CenterDiv)`
`

const ImageCell = styled.img`
height: 30px;
`
const Ingredients = (props) => {


    return (
        <Wrapper>
            <h3>Your's meal ingredients</h3>
            {/*https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead*/}
            <OverflowTable>
                <Table>
                    <Thead>
                        <tr>
                            <Th></Th>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Weight</Th>
                            <Th>Total fat</Th>
                            <Th>Cholesterol</Th>
                            <Th>Sodium</Th>
                            <Th>Potassium</Th>
                            <Th>Total Carbohydrates</Th>
                            <Th>Protein</Th>
                            <Th></Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        {props.data.map((ingredient, index) => (
                        <tr key={index}>
                            <Td><ImageCell src={ingredient.imgUrl}/></Td>
                            <Td>{ingredient.food}</Td>
                            <Td>{ingredient.calories} kcal</Td>
                            <Td>{ingredient.weight} g</Td>
                            <Td>{ingredient.totalFat} g</Td>
                            <Td>{ingredient.cholesterol} mg</Td>
                            <Td>{ingredient.sodium} mg</Td>
                            <Td>{ingredient.potassium} mg</Td>
                            <Td>{ingredient.totalCarbohydrates} g</Td>
                            <Td>{ingredient.protein} g</Td>
                            <Td><DeleteButton onClick={()=>props.deleteRow(ingredient.id)}>X</DeleteButton></Td>
                        </tr>
                        ))}
                    </Tbody>
                </Table>
            </OverflowTable>
        </Wrapper>
    )
}

export default Ingredients;