/*
 * @Author: kser 
 * @Date: 2020-08-04 20:10:39 
 * @Last Modified by:   kser 
 * @Last Modified time: 2020-08-04 20:10:39 
 */

import React from 'react';


class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;