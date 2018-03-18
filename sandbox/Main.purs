module Main where

import Prelude
import Data.Array (null)
import Data.Array.Partial (tail)
import Data.List ((:), List(..), reverse, filter)
import Data.Maybe (Maybe(..))
import Partial.Unsafe (unsafePartial)
import Control.Monad.Eff.Console (logShow)
import TryPureScript (render, withConsole)

data Foo = Foo | Bar String

runFoo :: Foo -> String
runFoo Foo = "Damn right it's Foo"
runFoo (Bar s) = "Yeah it's Bar and " <> s

nonSense :: Int -> Int -> Int
nonSense n 0 = 0
nonSense n _ = n

whoIsGreater :: Int -> Int -> Int
whoIsGreater n m | n > m = n
                 | otherwise = m


isEmpty :: forall a. Array a -> Boolean
isEmpty [] = true
isEmpty _ = false


type PersonRec = { name :: String
                 , age  :: Int
                 }

data Person = PersonA PersonRec

instance showPerson :: Show Person where
  show (PersonA { name, age }) =
    "PersonA { name: " <> show name
    <> ", age: " <> show age <> "})"

whoAmI :: String -> Int -> Person
whoAmI name age = PersonA{ name, age }

fact :: Int -> Int
fact 0 = 1
fact n = n * fact(n -1)


length :: forall a. Array a -> Int
length [] = 0
length arr =
  1 + length (unsafePartial tail arr)

data Vehicle
  = Car Wheels
  | MotorCycle Wheels
  | Skateboard Wheels
  | Bicycle Wheels

data Wheels = Wheels Int

instance showWheels' :: Show Wheels where
  show = showWheels

instance showVehicle' :: Show Vehicle where
  show = showVehicle

myVehicle :: Vehicle
myVehicle = Car (Wheels 4)

showWheels :: Wheels -> String
showWheels (Wheels a) = "Wheels: " <> show a

showVehicle :: Vehicle -> String
showVehicle (Car a) = "Vehicle: Car, " <> show a
showVehicle (MotorCycle a) = "Vehicle: Car, " <> show a
showVehicle (Skateboard a) = "Vehicle: Car, " <> show a
showVehicle (Bicycle a) = "Vehicle: Car, " <> show a

-- data List a = Nil | Cons a (List a)
myIntList :: List Int
myIntList = (Cons 1 (Cons 2 (Cons 3 Nil)))

map' :: forall a b. (a -> b) -> List a -> List b
map' _ Nil = Nil
map' f (x : xs) = f x : map' f xs


filter' :: forall a. (a -> Boolean) -> List a -> List a
filter' p l = go Nil l
  where
  go acc Nil = reverse acc
  go acc (x : xs)
    | p x = go (x : acc) xs
    | otherwise = go acc xs

myListList :: List (List Int)
myListList =
  (Cons
    (Cons 1 (Cons 2 Nil))
    (Cons
      (Cons 3 (Cons 4 Nil))
  Nil))

concatLists :: forall a. List (List a) -> List a
concatLists Nil = Nil
concatLists (x : xs) = x <> concatLists xs
-- logShow $ concatLists myListList

concatMapLists :: forall a b. (List a -> List b) -> List (List a) -> List b
concatMapLists f Nil = Nil
concatMapLists f (x :xs) = (f x) <> (concatMapLists f xs)
-- logShow $ concatMapLists (map (_ + 1)) myListList

myIntLists :: List Int
myIntLists = (Cons 1 (Cons 2 (Cons 3 (Cons 4 Nil))))

foldl' :: forall a b. (b -> a -> b) -> b -> List a -> b
foldl' f acc l = case l of
  Nil -> acc
  (x : xs) -> foldl' f (f acc x) xs


mapFoldl' :: forall a b. (a -> b) -> List a -> List b
mapFoldl' f xs = foldl' (\acc x -> acc <> Cons (f x) Nil) Nil xs

mapFilter' :: forall a. (a -> Boolean) -> List a -> List a
mapFilter' f xs =
  foldl'
    (\acc x ->
      acc <> if f x then Cons x Nil else Nil )
    Nil xs

mapReverse' :: forall a b. List a -> List a
mapReverse' xs = foldl' (\acc x -> Cons x acc) Nil xs

main = render =<< withConsole do
  logShow $ foldl' (+) 0 myIntLists
  logShow $ mapFoldl' (_ + 2) myIntLists
  logShow $ mapFilter' (_ > 2) myIntLists
  logShow $ mapReverse' myIntLists
