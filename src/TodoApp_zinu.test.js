import React from "react";
import { render, firEvent } from '@testing-library/react';
import TodoApp_zinu from "./TodoApp_zinu";
import { fireEvent } from "@testing-library/react/types";

describe('<TodoApp_zinu />', () => {
    it('renders TodoForm TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp_zinu />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
    it('renders two defaults todos', () => {
        const {getByText} = render(<TodoApp_zinu />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
    it('creates new todo', () => {
        const {getByPlaceholderText, getByText} = render(<TodoApp_zinu />);
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'),
            {target: {value: "새 항목 추가하기"}}
        );
        fireEvent.click(getByText("등록"));
        getByText('새 항목 추가하기');
    });
});