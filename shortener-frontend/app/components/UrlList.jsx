import React, { useState, useCallback } from 'react'
import { deleteData } from '../helpers/DataHelper'

/**
 * 
 * @param {string} url shortener url from backend
 * @param {integer} id id from database item
 * @param {integer} access statistic from url access 
 * @returns 
 */
const UrlList = ({ item, id, access }) => {

    const handleDelete = (id) => {
        const tokenLocal = window.localStorage.getItem('token');
        deleteData(id, tokenLocal)
    }

    return (
        <article className="url-list">
            <div className="url-item">
                {/* <button className="btn-list" id="item-edit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button> */}
                <button className="btn-list ml-2" id="item-delete" onClick={() => handleDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
                <a href={`http://localhost:8181/${item}`} target="_blank" className="w-2/3 text-center tracking-wide hover:underline">{`http://localhost:8181/${item}`}</a>
                <p className="w-1/3 text-center">{`access = ${access}`}</p>
                <p>{id}</p>
            </div>
        </article>
    )
}

export default UrlList