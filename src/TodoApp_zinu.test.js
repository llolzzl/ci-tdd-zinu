import React from "react";
import { render, firEvent } from '@testing-library/react';
import TodoApp_zinu from "./TodoApp_zinu";

describe('<TodoApp_zinu />', () => {
    it('renders TodoForm TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp_zinu />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
});