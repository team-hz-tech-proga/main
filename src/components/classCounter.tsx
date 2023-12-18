import React, { Component } from 'react';

interface ClassCounterState {
    counter: number;
}

interface ClassCounterProps {
    count: number;
}

class ClassCounter extends Component<ClassCounterProps, ClassCounterState> {
    constructor(props: ClassCounterProps) {
        super(props);

        // Инициализация состояния
        this.state = {
            counter: props.count,
        };

        // Привязка метода к текущему экземпляру класса
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    componentDidUpdate(prevProps: ClassCounterProps) {
        // Проверяем, изменились ли пропсы
        if (this.props.count !== prevProps.count) {
            // Обновляем состояние на основе новых пропсов
            this.setState({
                counter: this.props.count,
            });
        }
    }

    // Пример метода, изменяющего состояние
    handleIncrement() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    render() {
        return (
            <div className="flex items-center gap-4">
                <p>Счетчик: {this.state.counter}</p>
                <button className="px-3 py-1 rounded-md bg-lime-600 text-white" onClick={this.handleIncrement}>
                    Увеличить счетчик
                </button>
            </div>
        );
    }
}

export default ClassCounter;
