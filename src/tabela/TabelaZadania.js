import React, { Component } from 'react';

class TabelaZadania extends Component {
    state = {
        auto: "",
        osoba: "",
        transport: "",
        faktura: false,
        date: "2019-10-23"
    }

    handleChange = e => {
        const name = e.target.name;
        const type = e.target.type;
        if (type === "text" || type === "password" || type === "email") {
            this.setState({
                [name]: e.target.value
            });
        } else if (type === "checkbox") {
            this.setState({
                [name]: e.target.checked
            });
        }
        else if (type === "date") {
            this.setState({
                [name]: e.target.value
            });
        }
    };

    render() {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group m-4">
                        <label htmlFor="data">
                            <input
                                className="form-control"
                                type="date"
                                id="date"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="auto">
                            <input
                                className="form-control"
                                type="text"
                                id="auto"
                                name="auto"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="osoba">
                            <input
                                className="form-control"
                                type="text"
                                id="osoba"
                                name="osoba"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="transport">
                            <input
                                className="form-control"
                                type="text"
                                id="transport"
                                name="transport"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group m-4">
                        <label class="form-check-label" htmlFor="faktura">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="faktura"
                                name="faktura"
                                checked={this.state.faktura}
                                onChange={this.handleChange}
                            />
                            Faktura
          </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabelaZadania;