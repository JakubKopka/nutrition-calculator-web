import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {CenterDiv} from "../layout/elements/other";
import {OverflowTable, Table, Tbody, Td, Th, Thead} from "../layout/elements/table";

const Wrapper = styled(CenterDiv)`
`

const Summary = (props) => {
    const {summaryData} = props;

    return (
        <Wrapper>
            <h3>Meal summary</h3>
            <OverflowTable>
                <Table>
                    <Thead>
                        <tr>
                            <Th>Calories</Th>
                            <Th>Weight</Th>
                            <Th>Total fat</Th>
                            <Th>Cholesterol</Th>
                            <Th>Sodium</Th>
                            <Th>Potassium</Th>
                            <Th>Total Carbohydrates</Th>
                            <Th>Protein</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <Td>{summaryData.calories} kcal</Td>
                            <Td>{summaryData.weight} g</Td>
                            <Td>{summaryData.totalFat} g</Td>
                            <Td>{summaryData.cholesterol} mg</Td>
                            <Td>{summaryData.sodium} mg</Td>
                            <Td>{summaryData.potassium} mg</Td>
                            <Td>{summaryData.totalCarbohydrates} g</Td>
                            <Td>{summaryData.protein} g</Td>
                        </tr>
                    </Tbody>
                </Table>
            </OverflowTable>
        </Wrapper>
    )
}

export default Summary;