/*
|--------------------------------------------------------------------------
| Tail recursion
|--------------------------------------------------------------------------
*/
function factorial (n, sum = 1)
{
  if (n === 0)
    return sum
  else
    return factorial(n - 1, n * sum)
}

function length ([first, ...rest], count = 0)
{
  if (first === undefined)
    return count
  else
    return length(rest, count + 1)
}

function bindLeft (fn, ...args)
{
  return (...remaining) => fn(...remaining, ...args)
}

function bindRight (fn, ...args)
{
  return (...remaining) => fn(...remaining, ...args)
}

function map ([first, ...rest], fn, work = [])
{
  if (first === undefined)
    return work
  else
    return map(rest, fn, work.concat(fn(first)))
}

function mapWith (fn)
{
  return array => map(array, fn)
}

const double = n => n * 2
const doubleEach = mapWith(double)

console.log(doubleEach([2, 1, 35, 5]))
