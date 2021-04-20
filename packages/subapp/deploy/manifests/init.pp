class xbox {
  include config

  file { [ "/home/work/data/",
           "/home/work/data/${config::prog_name}/" ]:
    ensure => directory,
    mode => 755, owner => work, group => work,
  }
  file { [ "/home/work/log/",
           "/home/work/log/${config::prog_name}/" ]:
    ensure => directory,
    mode => 755, owner => work, group => work,
  } ->
  exec { "chown -R work:work /home/work/log/" :
    path => '/bin/:/usr/bin/'
  }
}

include xbox
