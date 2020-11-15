import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useForm} from "react-hook-form";
import {MenuButton} from "../layout/elements/buttons";
import {BasicInput, NumberInput} from "../layout/elements/inputs";
import {CenterDiv} from "../layout/elements/other";

const Wrapper = styled(CenterDiv)`
`

const Column = styled.div`
display: flex;
flex-direction: column;
`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Warning = styled.span`
color: red;
font-weight: bold;
font-size: 0.8em;
`

const Add = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        props.addNewIngredient(data)
        resetForm()
    }

    const resetForm = () => {
        document.getElementById("add-ingredient-form").reset()
    }

    return (
        <Wrapper>
            <h3>Add ingredient to your meal</h3>
            <form id="add-ingredient-form" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <label>Ingredient: </label>
                    <Column>
                        <BasicInput name="name" placeholder="e.g. onion" ref={register({required: true})}/>
                        {errors.name && <Warning>This field is required</Warning>}
                    </Column>

                    <label>Weight: </label>
                    <Column>
                        <NumberInput name="weight" type="number" placeholder="100" min="1"
                                     ref={register({required: true})}/>
                        {errors.weight && <Warning>This field is required</Warning>}
                    </Column>
                    <span>g</span>
                    <MenuButton type="submit"> Add </MenuButton>
                </Row>

            </form>
        </Wrapper>
    )
}

export default Add