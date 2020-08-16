import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Select from './Select'
import Repository from './Repository'
import Developer from './Developer'
import { spokenLanguages, languages, dates } from '../constants/data'

const Trendings = ({ searchValue }) => {
  const [activeTab, setActiveTab] = useState('repo')
  const [spokenLanguage, setSpokenLanguage] = useState('')
  const [language, setLanguage] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let res

        if (activeTab === 'repo') {
          if (searchValue) {
            res = await axios.get(`https://api.github.com/search/repositories?q=${searchValue}+in:name&sort=stars&order=desc&per_page=25`)
          }
          else {
            res = await axios.get(`https://api.github.com/search/repositories?q=created:${dateRange}+language:${language}&sort=stars&order=desc&per_page=25`)
          }

          res = res.data.items.map(repo => ({
            name: repo.full_name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks,
            url: repo.html_url
          }))
  
          setData(res)
        }
        else {
          res = await axios.get(`https://api.github.com/search/users?q=created:${dateRange}+language:${language}&order=desc&per_page=25`)

          res = res.data.items.map(dev => ({
            name: dev.login,
            avatar: dev.avatar_url,
            url: dev.html_url
          }))
          
          setData(res)
        }
      }
      catch (err) {
        console.log(err)
      }
    })()
  }, [activeTab, searchValue, language, dateRange])

  return (
    <div className='trendings'>
      <div className="card">
        <div className="card-header flex space-between">
          <div className="btn-group">
            <button
              className={`repo-btn ${activeTab === 'repo' && 'active'}`}
              onClick={() => {
                setActiveTab('repo')
                setSpokenLanguage('')
                setLanguage('')
                setDateRange('2020-08-16')
              }}
            >
              Repositories
            </button>
            <button
              className={`dev-btn ${activeTab === 'dev' && 'active'}`}
              onClick={() => {
                setActiveTab('dev')
                setSpokenLanguage('')
                setLanguage('')
                setDateRange('2020-08-16')
              }}
            >
              Developers
            </button>
          </div>
          <div className="options flex">
          {
              activeTab === 'repo' && 
                <Select
                  title='Spoken Language'
                  id='spokenLanguage'
                  options={spokenLanguages}
                  selectedOption={spokenLanguage}
                  setSelectedOption={setSpokenLanguage}
                />
            }
            <Select
              title='Language'
              id='language'
              options={languages}
              selectedOption={language}
              setSelectedOption={setLanguage}
            />
            <Select
              title='Date range'
              id='dateRange'
              options={dates}
              selectedOption={dateRange}
              setSelectedOption={setDateRange}
            />
          </div>
        </div>
        <div className="card-body">
          {
            activeTab === 'repo' ?
              data.length > 0 ?
                data.map((repo, index) => (
                  <Repository key={index} {...repo} />
                ))
              : 
                <h2 className='error flex center'>It looks like we don’t have any trending repositories for your choices.</h2>
            : ""
          }
          {
            activeTab === 'dev' ?
              data.length > 0 ?
                data.map((item, index) => (
                  <Developer key={index} {...item} no={index + 1} />
                ))
              :
                <h2 className='error flex center'>It looks like we don’t have any trending developer for your choices.</h2>
            : ''
          }
        </div>
      </div>
    </div>
  )
}

export default Trendings