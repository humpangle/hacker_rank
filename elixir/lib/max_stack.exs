defmodule Solution do
  defp gets(strings) do
    case IO.gets("") do
      :eof ->
        Enum.reverse(strings)

      s ->
        gets([s | strings])
    end
  end

  defp do_run(string) do
    string
    |> Enum.reduce([], fn i, s ->
      String.split(i, " ")
      |> Enum.map(&(String.trim(&1) |> String.to_integer()))
      |> case do
        [1, a] ->
          s = [a | s]
          s

        [2] ->
          [_a | s] = s
          s

        [3] ->
          IO.puts(Enum.max(s))
          s
      end
    end)
  end

  def run() do
    _count = IO.gets("")
    do_run(gets([]))
  end

  def run(string) do
    [_ | string] = string |> String.trim() |> String.split("\n")
    do_run(string)
  end
end

string = """
10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3
"""

# Solution.run(string)
Solution.run()
