import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Layout from "../layout/layout";
import Ingredients from "./ingredients";
import Add from "./add";
import Summary from "./summary";
import axios from "axios";
import {MenuButton} from "../layout/elements/buttons";
import {ErrorMessage} from "../layout/elements/other";

const ResetButton = styled(MenuButton)`
margin-top: 30px;
`

const Calculator = () => {
    const API_URL = "http://localhost:8080/api/nutrition"
    const [data, setData] = useState([]);
    const [summary, setSummary] = useState([])
    const [error, setError] = useState("")
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        getDataFromApi()
    }, [])

    useEffect(() => {
        axios.get(`${API_URL}/summary`)
            .then(res => {
                setSummary(res.data)
            })
    }, [data])

    const getDataFromApi = () => {
        axios.get(`${API_URL}`)
            .then(res => {
                setData(res.data)
            })
    }

    const addNewIngredient = (obj) => {
        axios.post(`${API_URL}`, obj)
            .then(res => {
                setData(res.data)
                setShowError(false)
            })
            .catch(error => {
                setError(error.response.data.message)
                setShowError(true)
            })
    }

    const deleteRow = (index) => {
        axios.delete(`${API_URL}/${index}`)
            .then(res => {
                if (res.status === 200) {
                    getDataFromApi()
                }
            })
    }

    const resetData = () => {
        axios.delete(`${API_URL}/reset`)
            .then(res => {
                if (res.status === 200) {
                    getDataFromApi()
                }
            })
    }

    return (
        <Layout>
            <Add addNewIngredient={addNewIngredient}/>
            <ErrorMessage showError={showError}>{error}</ErrorMessage>
            <Ingredients data={data} deleteRow={deleteRow}/>
            <Summary summaryData={summary}/>
            <ResetButton onClick={resetData}>Reset</ResetButton>
        </Layout>
    )
}

export default Calculator;