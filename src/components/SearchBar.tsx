import { useState } from 'react'
import { ENTER_CITY } from "../utils/constants"
import { Location } from "../utils/interface"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { geoApiOptions } from "../utils/api";
import { formatLocation } from '../utils/helper';
import axios from 'axios';

type Props = {
  onClick: (location: Location) => void;
}

const SearchBar = ({ onClick } : Props) => {
  const [inputValue, setInputValue] = useState('')
  const [dropdownOptions, setDropdownOptions] = useState<Location[]>([]);

  const fetchData = async () => {
    const optionsWithPrefix = { ...geoApiOptions }
    optionsWithPrefix.params.namePrefix = inputValue

    try {
      const response = await axios.request(optionsWithPrefix)
      const data = response.data.data
      if (Array.isArray(data)) {
        setDropdownOptions(data);
      } else {
        console.error("Invalid response data format!");
      }
    } catch (error) {
      console.error("Error Fetching Data: ", error)
    }
  }

  // useEffect(() => {
  //   console.log("Dropdown Options:", dropdownOptions);
  // }, [dropdownOptions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSearchClick = () => {
     fetchData()
  }

  const handleOptionClick = (location: Location) => {
    console.log("option clicked: ", location.city)
    setInputValue(formatLocation(location))
    setDropdownOptions([])
    onClick(location)
  }

  return (
    <div className="flex flex-col space-y-1 relative">
      <div className="flex flex-row space-x-2">
          <input
              className="border rounded-lg py-2 px-4 w-96 bg-background placeholder-lightGreen text-lg focus:outline-none focus:ring"
              type="text"
              placeholder={ENTER_CITY}
              onChange={handleInputChange}
              value={inputValue}
          />
          <button onClick={handleSearchClick}>
            <MagnifyingGlassIcon className="h-8 w-8 text-background" />
          </button>
      </div>
      {dropdownOptions.length > 0 && (
        <div className="dropdown bg-background py-2 px-4 w-96 absolute top-full my-2 overflow-y-auto max-h-40 z-10">
            {dropdownOptions.map((option, index) => (
              <button
                key={index}
                className="dropdown-option py-2 hover:border-mediumGreen border-transparent border pr-40"
                onClick={() => handleOptionClick(option)}
              >
                {formatLocation(option)}
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar