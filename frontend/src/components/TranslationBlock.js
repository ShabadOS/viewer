/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions
*/
import React, { useContext, useState } from 'react'
import { number, string, shape } from 'prop-types'
import classNames from 'classnames'

import { TranslationSourcesContext } from '../lib/contexts'

import './TranslationBlock.css'

const languages = {
  english: 1,
  punjabi: 2,
}

const languageFonts = {
  [ languages.english ]: 'latin',
  [ languages.punjabi ]: 'punjabi',
}

const TranslationBlock = ( { translationSourceId, translation, additionalInformation } ) => {
  const [ expanded, setExpanded ] = useState( true )

  const toggleExpanded = () => setExpanded( !expanded )

  const translationSources = useContext( TranslationSourcesContext )
  const source = translationSources.find( ( { id } ) => translationSourceId === id )

  if ( !Object.values( languages ).includes( source.languageId ) || !translation ) return null

  return (
    <div className="translation-block">
      <h2 className="source-name" onClick={toggleExpanded}>{`[${source.language.nameEnglish}] ${source.nameEnglish}`}</h2>

      <div className={classNames( { expanded }, 'blocks' )}>
        <div className="block">

          <p className={classNames( languageFonts[ source.languageId ], 'translation' )}>{translation}</p>

          {Object
            .entries( additionalInformation )
            .filter( ( [ , v ] ) => v )
            .map( ( [ name, information ] ) => (
              <p key={name} className={classNames( languageFonts[ source.languageId ], 'translation' )}>
                {[ name, information ].join( '. ' )}
              </p>
            ) )}

        </div>

        <p className="punjabi translation block">{translation}</p>

      </div>
    </div>
  )
}

TranslationBlock.propTypes = {
  translationSourceId: number.isRequired,
  translation: string.isRequired,
  additionalInformation: shape( {} ).isRequired,
}

export default TranslationBlock
