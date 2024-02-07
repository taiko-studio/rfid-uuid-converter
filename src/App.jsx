import { useState } from 'react'

function App() {
  const [input] = useState('')
  const [result, setResult] = useState('')
  const converter = (input) => {
    const charList = `à&é"'(§è!ç`
    return [...input.trim()].reduce((acc, curr, i, arr) => {
      if (charList.indexOf(curr) >= 0) {
        return `${acc}${charList.indexOf(curr)}`
      }
      else {
        arr.splice(1)
        return 'ERROR'
      }
    }, '')
  }


  const copyToClipboard = async (e) => {
    e.preventDefault()

    try {
      await navigator.clipboard.writeText(result);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const handleInputChange = (e) => {
    setResult(converter(e.target.value))
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Convert RFID Uuid
          </h2>
          <p className="text-base text-center leading-7 text-gray-600">from card reader on MacOs
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Input
                </label>
              </div>
              <div className="mt-2">
                <input

                  type="text"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Output
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="result"
                  type="text"
                  value={result}
                  readOnly
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Copy to clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
