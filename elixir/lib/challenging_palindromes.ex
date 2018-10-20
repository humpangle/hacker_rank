defmodule ChallengingPalindromes do
  def sub_string(s) do
    1..String.length(s)
    |> Enum.map(&sub_string(s, &1 - 1, []))
  end

  def sub_string("", _, acc), do: Enum.reverse(acc)

  def sub_string(<<first, rest::binary>>, len, acc) do
    size = len * 8
    <<next::size(size), rest_::binary>> = rest
    acc = [<<first>> <> <<next::size(size)>> | acc]
    sub_string(if(rest_ == "", do: "", else: rest), len, acc)
  end
end
