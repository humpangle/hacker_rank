def get_station_data(stations_data, from_, to):
    data = [x for x in stations_data if x['from'] == from_ and x['to'] == to]
    return data[0] if len(data) else None


def get_bus_max_wait_times(stations_data, commuters):
    bus_max_wait_times = {}
    last_station_num = 0
    for wait_time, station_num, _next_stop in commuters:
        max_wait_time = max(
            bus_max_wait_times.get(station_num, 0), wait_time)

        if last_station_num != 0 and last_station_num != station_num:
            station_data = get_station_data(stations_data,
                                            last_station_num, station_num)
            if station_data:
                max_wait_time = max_wait_time - \
                    station_data['time'] - bus_max_wait_times[last_station_num]

        bus_max_wait_times[station_num] = max_wait_time

        last_station_num = station_num
    return bus_max_wait_times


def compute_stations_travel_times(stations_data, nitro):
    for station in stations_data:
        if nitro == 0:
            break
        travel_time = station['time']
        time_saving = min(nitro, travel_time)
        nitro -= time_saving
        station['time'] = travel_time - time_saving


def drive(n, k, d, commuters):
    stations_data = sorted([{'from': x, 'to': x+1, 'time': d[x-1]}
                            for x in range(1, n)], key=lambda x: x['time'], reverse=True)

    compute_stations_travel_times(stations_data, k)
    commuters.sort(key=lambda y: y[1])
    passengers = {
        (i+1): {'start_time': x[0], 'from': x[1], 'to': x[2]} for i, x in enumerate(commuters)
    }

    print('\n\nstations_data', stations_data, '\n\n')

    max_station_wait_times = get_bus_max_wait_times(stations_data, commuters)
    min_times = 0
    for key in sorted(passengers):
        p = passengers[key]
        from_ = p['from']
        to = p['to']

        wait_time_from_station = max(
            (max_station_wait_times.get(from_) - p['start_time']), 0)

        wait_times_non_boundary_stations = sum([max_station_wait_times[x]
                                                for x in max_station_wait_times if x < to and x > from_
                                                ])

        travel_time = sum([x['time'] for x in stations_data if x['from']
                           >= from_ and x['to'] <= to])
        min_time = wait_times_non_boundary_stations + \
            wait_time_from_station + travel_time
        min_times += min_time
    return min_times


if __name__ == '__main__':
    import os
    data = open(os.path.join(os.path.dirname(__file__), 'input1.txt')).read()
    # answer = 4909

    data = data.strip().split('\n')
    data = [[int(y) for y in x.strip().split()] for x in data]
    print(drive(data[0][0], data[0][2], data[1], data[2:]))
