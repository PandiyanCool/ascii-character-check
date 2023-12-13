'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [targetText, setTargetText] = useState<string>('');
  const [valid, setValid] = useState<Boolean>();
  let checkTextValidation = (event: ChangeEvent) => {
    setTargetText((event.target as HTMLInputElement).value);
    const nonASCIIRegex = /[^\x00-\x7F]/;
    let valid = !nonASCIIRegex.test(targetText);

    setValid(valid);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;
          <code className="font-mono font-bold">Non Ascii character check</code>
        </p>
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Check your text whether any non-ascii character present are not.
          </label>
          <div className="mt-2">
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''}
              onChange={checkTextValidation}
            />
          </div>

          {valid && targetText.length > 0 ? (
              <div className="rounded-md bg-green-50 p-4 mt-5">
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Looks good.
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Please continue</p>
                  </div>
                </div>
              </div>
            </div>            
          ) : (
            <div className="rounded-md bg-red-50 p-4 mt-5">
            <div className="flex">
              <div className="flex-shrink-0"></div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Non ASCII characters present.
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul role="list" className="list-disc space-y-1 pl-5">
                    <li>Check your input.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
