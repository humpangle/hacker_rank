defmodule BeautifulBinaryString do
  @one ?1
  @zero ?0

  def run do
    IO.gets("")

    ""
    |> IO.gets()
    |> String.trim()
    |> beautify()
    |> IO.puts()
  end

  def beautify(string), do: beautify(string, 0)
  def beautify("", count), do: count
  def beautify(<<@zero, @one, @zero, r::binary>>, c), do: beautify(r, c + 1)
  def beautify(<<_, r::binary>>, c), do: beautify(r, c)
end
