#!/bin/bash

set -e

# node -v > 8.9.0
valid_node_version() {
    local node_v=`$1node -v `
    local res=false

    if [ -n "$node_v" ]
    then
        local tmp_v=($( echo $node_v | tr "." "\n" ))
        local main_v="${tmp_v[0]:1}"
        local mid_v="${tmp_v[1]}"
        if [ $main_v -ge 8 ] && [ $mid_v -ge 9 ]
        then
            res=true
        else
            res=false
        fi
    else
        res=false
    fi

    echo $res
}

# npm -v > 5.6.0
valid_npm_version() {
    local npm_v=`$1npm -v`
    local res=false

    if [ -n "$npm_v" ]
    then
        local tmp_v=($( echo $npm_v | tr "." "\n" ))
        local main_v="${tmp_v[0]}"
        local mid_v="${tmp_v[1]}"
        if [ $main_v -ge 5 ] && [ $mid_v -ge 6 ]
        then
            res=true
        else
            res=false
        fi
    else
        res=false
    fi

    echo $res
}

env_detect() {
    local node=$( valid_node_version $1)
    local npm=$( valid_npm_version $1)

    if $node && $npm
    then
        echo true
    else
        echo false
    fi
}
