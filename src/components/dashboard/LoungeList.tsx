import React from 'react';
import { Link } from 'react-router-dom';

export default function LoungeList(props: any) {
  let lounges = [
    {
      name: "helen's huddle",
      occupants: [
        {
          avatar:
            'data:image/jpeg;base64,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',
          name: 'jimmy',
        },
        {
          avatar:
            'data:image/png;base64,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',
          name: 'timmy',
        },
      ],
    },
    {
      name: "will's welcome",
      occupants: [
        {
          avatar:
            'data:image/png;base64,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',
          name: 'pony',
        },
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-lg leading-6 font-medium text-black">Projects</h2>
        <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg
            className="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
            width="12"
            height="20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
            />
          </svg>
          New
        </button>
      </header>
      <form className="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects"
        />
      </form>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {lounges.map(lounge => {
          return (
            <li>
              <a
                href="#"
                className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
              >
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="group-hover:text-white leading-6 font-medium text-black">{lounge.name}</dd>
                  </div>
                  {/* <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                      {item.category}
                    </dd>
                  </div> */}
                  <div className="col-start-2 row-start-1 row-end-3">
                    <dt className="sr-only">Users</dt>
                    <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                      {lounge.occupants.map(user => {
                        return (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            width="48"
                            height="48"
                            className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
                          />
                        );
                      })}
                    </dd>
                  </div>
                </dl>
              </a>
            </li>
          );
        })}

        <li className="hover:shadow-lg flex rounded-lg">
          <a
            href="/new"
            className="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4"
          >
            New Project
          </a>
        </li>
      </ul>
      <Link to={`/join`}>join a room by name</Link>
    </section>
  );
}
